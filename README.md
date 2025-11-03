\# Restaurant Web App



A fully responsive restaurant web application built with \*\*Next.js 15\*\*, \*\*TypeScript\*\*, \*\*Tailwind CSS\*\*, and \*\*Framer Motion\*\*. This project simulates a modern restaurant website with complete customer interaction flow, from menu browsing to checkout, reservations, and order tracking.



---



\## Table of Contents



\- \[Features](#features)  

\- \[Tech Stack](#tech-stack)  

\- \[Project Structure](#project-structure)  

\- \[Pages](#pages)  

\- \[Installation](#installation)  

\- \[Usage](#usage)  

\- \[Future Improvements](#future-improvements)  

\- \[License](#license)



---



\## Features



\- \*\*Home Page:\*\* Hero section, featured dishes, special offers, chef section, testimonials, reservation CTA.  

\- \*\*Menu Page:\*\* Filterable dishes by category, price range, image gallery, and add-to-cart functionality.  

\- \*\*Cart \& Checkout:\*\* Update quantities, apply coupons, view order summary, billing and delivery info, multiple payment options (mock).  

\- \*\*User System:\*\* Login/Register, profile management, order history, saved addresses, change password.  

\- \*\*Search:\*\* Real-time search results for dishes and blog posts.  

\- \*\*Blog:\*\* Blog listing, blog details with images and comments section.  

\- \*\*Pages for Policy \& Info:\*\* Terms \& Conditions, Privacy Policy, Refund Policy, FAQ, About Us.  

\- \*\*Gallery \& Team:\*\* Interior photos, dish gallery, chef and staff details with social links.  

\- \*\*Order Tracking \& Invoice:\*\* View order status (Pending / Processing / Delivered / Cancelled) and download invoice as PDF.  

\- \*\*Responsive \& Interactive:\*\* Fully mobile-friendly, animated UI with Framer Motion.



---



\## Tech Stack



\- \*\*Frontend:\*\* Next.js 15 (App Router), TypeScript, React  

\- \*\*Styling:\*\* Tailwind CSS  

\- \*\*Animations:\*\* Framer Motion  

\- \*\*State Management:\*\* React useState \& useEffect hooks  

\- \*\*Image Optimization:\*\* Next.js Image component  

\- \*\*PDF Generation:\*\* html2pdf.js  

\- \*\*Icons:\*\* Lucide-react  

\- \*\*Forms \& UI Components:\*\* Custom UI components using Tailwind  



---



\## Project Structure



/app

/about

/blogs

/cart

/checkout

/contact

/faq

/gallery

/invoice

/menu

/profile

/reservation

/search

/terms

/privacy

/refund

/testimonials

/components

/ui

Button.tsx

Card.tsx

Checkbox.tsx

Input.tsx

/public

/images





---



\## Pages



| Page | Features |

|------|---------|

| Home | Hero, Featured Dishes, Special Offers, Chef Section, Testimonials, Reservation CTA |

| Menu | Dish list, category \& price filter, add to cart, responsive grid |

| Cart | Table-style cart, update/remove items, coupon, order summary |

| Checkout | Billing \& delivery info, payment options, order summary |

| Order Status | Track orders: Pending / Processing / Delivered / Cancelled |

| Invoice | Downloadable invoice PDF for orders |

| Blog | Blog list \& details with images and comments |

| User Profile | Edit info, saved addresses, order history, password change |

| Contact | Form, Google Map, address, phone, working hours |

| Gallery | Photo grid: dishes, interior, events |

| Team | Chef \& staff profiles with social links |

| FAQ | Frequently asked questions |

| Terms / Privacy / Refund | Legal info, rules, and policies |

| Search Results | Dynamic dish \& blog search page |



---



\## Deployent



https://kachchi-bon.vercel.app/



\## Installation



1\. Clone the repository:



```bash

git clone https://github.com/yourusername/restaurant-web-app.git

cd restaurant-web-app



&nbsp;   Install dependencies:



npm install



&nbsp;   Run development server:



npm run dev



&nbsp;   Open http://localhost:3000



&nbsp;   in your browser.



Usage



&nbsp;   Browse menu items, add to cart, apply coupons.



&nbsp;   Register/Login to view profile and track orders.



&nbsp;   Use the search bar in the navbar to find dishes or blog posts.



&nbsp;   Reserve a table using the reservation CTA.



&nbsp;   Checkout orders and download invoices.



Future Improvements



&nbsp;   Integrate real backend and database for users, orders, and blog posts.



&nbsp;   Add online payment gateways (Stripe, PayPal).



&nbsp;   Dynamic Google Maps integration for delivery charges.



&nbsp;   Multi-language support.



&nbsp;   Push notifications for order status updates.



License



This project is open-source and available under the MIT License.



&nbsp;   Developed with ❤️ by Shrestha Shome Ullas

