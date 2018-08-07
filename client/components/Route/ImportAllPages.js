
import Header from '../views/header';
import Footer from '../views/footer';
import Home from '../home';
import FAQs from "../faqs";
import PostOrders from '../views/orders/postOrders';
import AddEditOrder from '../views/orders/addEditOrder';
import Contact from "../contact";
import Carousel from "../controls/carousel";
import PageHeader from "../controls/pageHeading";

export default class AllPages {
    static Header = Header;
    static Home = Home;
    static FAQs = FAQs;
    static Contact = Contact;
    static Footer = Footer;
    static Carousel = Carousel;
    static PageHeader = PageHeader;
    static PostOrders = PostOrders;
    static AddEditOrder = AddEditOrder;
}
