
import Header from '../views/header';
import Footer from '../views/footer';
import Home from '../home';
import FAQs from "../faqs";
import PostOrders from '../views/orders/postOrders';
import AddEditOrder from '../views/orders/addEditOrder';
import Contact from "../contact";
import Carousel from "../controls/carousel";
import PageHeader from "../controls/pageHeading";
import UserScreenHeading from "../controls/userScreenHeading";

import UserLogin from "../views/user/login";
import UserForgotPassword from "../views/user/forgotPassword";
import UserProfile from "../views/user/profile";
import UserRegister from "../views/user/register";
import UserSettings from "../views/user/settings";
import TermsOfUser from "../views/mix/termsofuser";


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
    static UserLogin = UserLogin;
    static UserForgotPassword = UserForgotPassword;
    static UserProfile = UserProfile;
    static UserRegister = UserRegister;
    static UserSettings = UserSettings;
    static TermsOfUser = TermsOfUser;
    static UserScreenHeading =  UserScreenHeading;
}
