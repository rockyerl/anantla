import Alert from "@/components/_shared/common/Alert";
import Layout from "@/components/_shared/core/layout";
import ContactUsComponent from "@/components/contactUs/ContactUsComponent";
import useStoreSelf from "@/stores";

const ContactUsContainer = () => {
  return (
    <Layout>
     
      <ContactUsComponent />
    </Layout>
  );
};

export default ContactUsContainer;
