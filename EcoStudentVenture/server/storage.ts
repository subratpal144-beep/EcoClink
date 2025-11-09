import { type ContactSubmission, type ContactSubmissionWithId, type Product, type VisitorStats } from "@shared/schema";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");
const VISITORS_FILE = path.join(DATA_DIR, "visitors.json");
const PRODUCTS_FILE = path.join(DATA_DIR, "products.json");

export interface IStorage {
  // Contact submissions
  saveContactSubmission(submission: ContactSubmission): Promise<ContactSubmissionWithId>;
  getAllContactSubmissions(): Promise<ContactSubmissionWithId[]>;
  
  // Visitor counter
  incrementVisitorCount(): Promise<number>;
  getVisitorCount(): Promise<number>;
  
  // Products
  getProducts(): Promise<Product[]>;
}

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error("Error creating data directory:", error);
  }
}

async function readJSONFile<T>(filePath: string, defaultValue: T): Promise<T> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

async function writeJSONFile<T>(filePath: string, data: T): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export class FileStorage implements IStorage {
  constructor() {
    this.initializeFiles();
  }

  private async initializeFiles() {
    await ensureDataDir();
    
    // Initialize contacts file
    try {
      await fs.access(CONTACTS_FILE);
    } catch {
      await writeJSONFile(CONTACTS_FILE, []);
    }
    
    // Initialize visitors file
    try {
      await fs.access(VISITORS_FILE);
    } catch {
      await writeJSONFile(VISITORS_FILE, { count: 0 });
    }
    
    // Initialize products file with default products
    try {
      await fs.access(PRODUCTS_FILE);
    } catch {
      const defaultProducts: Product[] = [
        {
          id: "1",
          name: "Floral Charm Keychain",
          description: "Vibrant patchwork design featuring colorful floral patterns from upcycled fabric scraps",
          priceRange: "₹40 - ₹50",
          imageUrl: "/assets/generated_images/Floral_patchwork_fabric_keychain_c1d4fe9e.png"
        },
        {
          id: "2",
          name: "Denim Mini Keychain",
          description: "Minimalist eco-friendly design crafted from repurposed denim and green cotton",
          priceRange: "₹45 - ₹55",
          imageUrl: "/assets/generated_images/Denim_and_green_cotton_keychain_cfe66308.png"
        },
        {
          id: "3",
          name: "Bohemian Earth Keychain",
          description: "Rustic charm with mixed textile patterns and embroidered leaf detail in earthy tones",
          priceRange: "₹50 - ₹60",
          imageUrl: "/assets/generated_images/Bohemian_earthy_fabric_keychain_b3c12157.png"
        }
      ];
      await writeJSONFile(PRODUCTS_FILE, defaultProducts);
    }
  }

  async saveContactSubmission(submission: ContactSubmission): Promise<ContactSubmissionWithId> {
    const contacts = await readJSONFile<ContactSubmissionWithId[]>(CONTACTS_FILE, []);
    
    const newSubmission: ContactSubmissionWithId = {
      ...submission,
      id: randomUUID(),
      timestamp: new Date().toISOString(),
    };
    
    contacts.push(newSubmission);
    await writeJSONFile(CONTACTS_FILE, contacts);
    
    return newSubmission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmissionWithId[]> {
    return await readJSONFile<ContactSubmissionWithId[]>(CONTACTS_FILE, []);
  }

  async incrementVisitorCount(): Promise<number> {
    const stats = await readJSONFile<VisitorStats>(VISITORS_FILE, { count: 0 });
    stats.count += 1;
    await writeJSONFile(VISITORS_FILE, stats);
    return stats.count;
  }

  async getVisitorCount(): Promise<number> {
    const stats = await readJSONFile<VisitorStats>(VISITORS_FILE, { count: 0 });
    return stats.count;
  }

  async getProducts(): Promise<Product[]> {
    return await readJSONFile<Product[]>(PRODUCTS_FILE, []);
  }
}

export const storage = new FileStorage();
