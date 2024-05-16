import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import CustomNavbar from "./components/CustomNavbar";
import CustomJumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [apiData, setApiData] = useState(null);

  const hitNextApi = async () => {
    try {
      const response = await axios.get('https://fe-next-s33f9p.bridevstudio.bbri.io/proxy/3001/greet');
      console.log(`response from hit api`, response.data);
      setApiData(response.data);
      alert(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
      alert('Error: ' + error.message);
    }
  }

  const links = [
    { url: '/generate', text: 'Generate' },
    { url: '/validation', text: 'Validation' },
  ];

  return (
    <>
      <main>
        <CustomNavbar brandText="DEA JSON VALIDATOR" links={links} />
        <CustomJumbotron>
          
        </CustomJumbotron> 
        <button onClick={hitNextApi}>Hit API</button>
        <Footer></Footer>
      </main>
    </>
  );
}
