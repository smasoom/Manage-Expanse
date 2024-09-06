
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired, // Validates that children is required and of type node
};

export default Layout;
