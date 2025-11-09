# EcoClink Website Design Guidelines

## Design Approach
**System Selected**: Custom eco-friendly design with minimal aesthetic
**Rationale**: Student entrepreneurship project requires approachable, clean design that emphasizes sustainability and handcrafted authenticity.

## Core Design Elements

### Typography
- **Primary Font**: Poppins (Google Fonts via CDN)
- **Secondary Font**: Lato (Google Fonts via CDN)
- **Hierarchy**:
  - Hero Title: text-4xl md:text-5xl lg:text-6xl, font-bold
  - Section Headings: text-3xl md:text-4xl, font-semibold
  - Subheadings: text-xl md:text-2xl, font-medium
  - Body Text: text-base md:text-lg, font-normal
  - Small Text: text-sm, font-light

### Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-16 md:py-20 lg:py-24
- Component spacing: space-y-8 md:space-y-12
- Card padding: p-6 md:p-8
- Container: max-w-7xl mx-auto px-4 md:px-6

### Component Library

**Navigation Bar**:
- Fixed/sticky header with logo on left
- Horizontal navigation links (Home, About, Products, Contact)
- Smooth scroll to sections
- Mobile: Hamburger menu with slide-in drawer
- Background: white with subtle shadow

**Buttons**:
- Soft rounded corners (rounded-full or rounded-2xl)
- Primary: Green background, white text
- Secondary: White background, green border, green text
- Padding: px-8 py-3 md:px-10 md:py-4
- Hover: Slight scale or brightness change

**Product Cards** (3 cards):
- Grid layout: grid-cols-1 md:grid-cols-3 gap-8
- White background, subtle shadow
- Rounded corners (rounded-2xl)
- Image at top (aspect-ratio-square or 4:3)
- Product name (text-xl font-semibold)
- Short description (text-base)
- Price range display: "₹40 - ₹60"
- Tagline above grid: "Handcrafted with care from recycled fabric"

**Contact Form**:
- Fields: Name, Email, Message (textarea)
- Soft rounded inputs (rounded-lg)
- Green submit button
- Success message display area
- Instagram link/icon placement
- Email display: ecoclink0012@gmail.com

**Team Section**:
- Grid or flex layout for team members
- Cards with names: Subrat Pal, Krishika, Shadiya Khan, Prachi, Saloni
- Placeholder spots for additional members
- Role/description text if applicable

### Visual Treatments

**Background Elements**:
- Subtle eco-themed patterns (leaves, cloth textures) with low opacity
- Use as decorative overlays, not dominant elements
- SVG icons from Heroicons or React Icons for leaf/eco symbols

**Color Palette** (will be defined by engineer):
- Primary: Soft/natural greens
- Secondary: White/off-white
- Accent: Earthy tones
- Text: Dark gray/charcoal for readability

**Animations**:
- Smooth scroll behavior across all navigation
- Fade-in effects on scroll (intersection observer)
- Subtle hover states on cards and buttons
- Keep animations minimal and performance-friendly

### Page-Specific Layouts

**Home Page**:
- Hero section with logo integration and main tagline "From Waste to Wow!"
- Subtitle: "Turning leftover fabric into handmade keychains"
- Sustainability paragraph (2-3 sentences)
- 2-3 product photos or placeholder gallery
- "Learn More" CTA button → About section
- Visitor counter in footer

**About Us**:
- Team introduction with school name: Dr. BR. ASOSE Sec-17, Rohini
- "We are students passionate about sustainability and entrepreneurship"
- Mission statement: "We aim to make eco-friendly products that help reduce textile waste"
- Team member cards/grid

**Products Page**:
- Product cards grid (described above)
- Each card: image placeholder, name, description, price
- Consistent spacing and alignment

**Contact Page**:
- Two-column layout (md and up): Form + Contact info
- Instagram placeholder (easily editable)
- School email display
- Form submission → success message

**Footer**:
- Copyright: "© 2025 EcoClink – Student Entrepreneurship Project"
- Optional: Quick links, social icons
- Visitor counter integration

## Images

**Logo**: User-provided logo (fabric keychain with leaf, stitching detail) - use throughout:
- Navigation bar (height: h-10 md:h-12)
- Footer
- Favicon

**Hero Section**: 
- Option 1: Large hero image showing keychains/fabric (full-width, h-screen or 80vh)
- Option 2: Logo prominently displayed with gradient/pattern background
- If using hero image with text overlay, ensure text has sufficient contrast (semi-transparent dark overlay or backdrop-blur)

**Product Images**: 
- 3 placeholder images for keychains (square or 4:3 ratio)
- Use nature/eco-themed placeholders or abstract fabric patterns

**Decorative Images**:
- Subtle background patterns (leaves, fabric textures) at 10-15% opacity
- About section: Optional team photo or workspace image

## Responsive Behavior
- Mobile-first approach
- Navigation: Hamburger → drawer menu on mobile
- Product grid: 1 column mobile, 2-3 columns tablet/desktop
- Forms: Full width mobile, controlled width desktop
- Typography scales down gracefully
- Touch-friendly button sizes on mobile (min 44px height)

## Technical Notes
- Smooth scroll-behavior CSS
- Lazy load images
- Accessible form labels and ARIA attributes
- Semantic HTML structure
- Instagram link and team members easily editable in config/data file
- Contact form connects to simple backend (JSON storage or console log)
- Product data loaded from JSON file dynamically