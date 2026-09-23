import re

with open("src/data/walkerData.js", "r", encoding="utf-8") as f:
    content = f.read()

new_services = """export const services = [
  {
    id: "custom-homes",
    title: "Custom Home Building",
    category: "Build",
    icon: "Home",
    summary: "High-performance, architecturally stunning custom homes tailored to your lifestyle, lot topography, and built to exceed BC Energy Step Code standards.",
    features: [
      "Fixed-price transparent budgeting",
      "End-to-end municipal permit management",
      "BC 2-5-10 Residential Home Warranty",
      "Dedicated senior site superintendent"
    ],
    bgImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "full-renovations",
    title: "Full Home Renovations",
    category: "Renovation",
    icon: "Building2",
    summary: "Complete gut-renovations, structural wall removals, and floorplan reconfigurations that breathe modern luxury into aging properties.",
    features: [
      "Structural steel beam installation",
      "Asbestos testing & safe remediation",
      "Complete electrical & plumbing repipes",
      "Open-concept layout transformations"
    ],
    bgImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "basement-suites",
    title: "Basement Suites & ADUs",
    category: "Renovation",
    icon: "Layers",
    summary: "Convert dark underutilized basements into bright, legal secondary suites, premium home theatres, or high-yield rental properties.",
    features: [
      "Soundproofing & resilient channel insulation",
      "Separate entrance excavation & drainage",
      "City permit management & occupancy sign-off",
      "High-ceiling underpinning & daylight windows"
    ],
    bgImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "luxury-kitchens",
    title: "Luxury Kitchen Renovations",
    category: "Renovation",
    icon: "ChefHat",
    summary: "Chef-grade custom kitchens with quartz waterfall islands, custom cabinetry, pantry extensions, and intelligent ambient lighting.",
    features: [
      "Custom solid wood & lacquer cabinetry",
      "Quartzite & marble waterfall counters",
      "Sub-Zero & Wolf appliance integration",
      "Concealed hidden pantries & coffee bars"
    ],
    bgImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bathroom-spa",
    title: "Spa Bathroom Renovations",
    category: "Renovation",
    icon: "Bath",
    summary: "Transform standard bathrooms into tranquil spa sanctuaries with heated tile floors, curbless rain showers, and freestanding tubs.",
    features: [
      "Schluter-KERDI waterproofing warranty",
      "Electric & hydronic radiant floor heating",
      "Curbless walk-in showers & linear drains",
      "Floating double vanities & LED mirrors"
    ],
    bgImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "exterior-renovations",
    title: "Exterior Renovations",
    category: "Renovation",
    icon: "Building2",
    summary: "Total facade transformations, high-efficiency window upgrades, and premium weather-resistant siding installations for BC's climate.",
    features: [
      "James Hardie & natural cedar siding",
      "Triple-pane high efficiency windows",
      "Rain-screen system engineering",
      "Custom timber-frame entryways"
    ],
    bgImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "painting",
    title: "Interior & Exterior Painting",
    category: "Specialty",
    icon: "Layers",
    summary: "Flawless, ultra-durable paint applications using premium commercial-grade coatings for both interior walls and exterior facades.",
    features: [
      "Level 5 drywall finishing & prep",
      "Benjamin Moore & Sherwin Williams",
      "Dustless sanding technology",
      "Weather-resistant exterior sealing"
    ],
    bgImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "flooring",
    title: "Premium Flooring",
    category: "Specialty",
    icon: "Layers",
    summary: "High-end flooring installations including wide-plank European white oak, heated large-format tile, and polished concrete.",
    features: [
      "Engineered & solid hardwood install",
      "Self-leveling & acoustic underlays",
      "Seamless flush floor transitions",
      "Custom stair tread manufacturing"
    ],
    bgImage: "https://images.unsplash.com/photo-1581858326456-7871b6d194c5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "framing-foundations",
    title: "Framing & Foundations",
    category: "Build",
    icon: "Hammer",
    summary: "Heavy structural timber framing, custom engineered roof trusses, and seismically reinforced concrete foundations.",
    features: [
      "Structural steel & heavy timber",
      "Seismic anchoring & retrofitting",
      "Custom forming & concrete pours",
      "Complex architectural roof framing"
    ],
    bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "landscaping",
    title: "Landscaping & Hardscaping",
    category: "Specialty",
    icon: "Home",
    summary: "Complete outdoor living transformations featuring architectural retaining walls, outdoor kitchens, and ambient landscape lighting.",
    features: [
      "Architectural concrete retaining walls",
      "Interlocking pavers & stone patios",
      "Custom built outdoor kitchens & firepits",
      "Low-voltage landscape lighting"
    ],
    bgImage: "https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&w=1200&q=80"
  }
];"""

new_content = re.sub(r'export const services = \[.*?\];', new_services, content, flags=re.DOTALL)

with open("src/data/walkerData.js", "w", encoding="utf-8") as f:
    f.write(new_content)