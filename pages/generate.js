import CustomNavbar from "@/pages/components/CustomNavbar";
import Footer from "@/pages/components/Footer";
import Breadcrumbs from "@/pages/components/Breadcrumbs";
import { Container } from 'react-bootstrap';
import CustomForm from "./components/CustomForm";
import { useState } from "react";

export default function generate() {
    const breadcrumbs = [
        { label: 'Home', link:'/'},
        { label: 'Generate JSON', link:'/generate'},
    ];

    const [formFields, setFormFields] = useState([
        {
            id: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Enter your name',
            value: '',
        },
        {
            id: 'proxy_url',
            label: 'Proxy_url',
            type: 'text',
            placeholder: 'Proxy URL',
            value: '',
        },
        {
            id: 'json_string',
            label: 'JSON String',
            type: 'textarea',
            placeholder: 'JSON String',
            value: '',
        },
        {
            id: 'json_schema',
            label: 'JSON Schema',
            type: 'textarea',
            placeholder: 'JSON Schema',
            value: '',
        },
    ]);

    const handleSubmit = (formData) => {
        console.log('Form Data', formData);
    }

    return (
        <>
            <CustomNavbar brandText="DEA JSON VALIDATOR" />
            <Container>
                <Breadcrumbs paths={breadcrumbs} />
                <CustomForm formFields={formFields} onSubmit={handleSubmit} />
            </Container>
            <Footer />
        </>
    )
}
