import { Component } from '@angular/core';
import { MenuSection } from '../constants/models/footerdto';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
   menuData: MenuSection[] = [
    {
      section: "Find It Fast",
      items: [
        { name: "Laptops & Computers", link: "#" },
        { name: "Cameras & Photography", link: "#" },
        { name: "Smart Phones & Tablets", link: "#" },
        { name: "Video Games & Consoles", link: "#" },
        { name: "TV & Audio", link: "#" },
        { name: "Gadgets", link: "#" },
        { name: "Waterproof Headphones", link: "#" }
      ]
    },
    {
      section: "About",
      items: [
        { name: "About", link: "#" },
        { name: "Contact", link: "#" },
        { name: "Wishlist", link: "#" },
        { name: "Compare", link: "#" },
        { name: "FAQ", link: "#" },
        { name: "Store Directory", link: "#" }
      ]
    },
    {
      section: "Customer Care",
      items: [
        { name: "My Account", link: "#" },
        { name: "Track your Order", link: "#" },
        { name: "Customer Service", link: "#" },
        { name: "Returns/Exchange", link: "#" },
        { name: "FAQs", link: "#" },
        { name: "Product Support", link: "#" }
      ]
    }
  ];
}
