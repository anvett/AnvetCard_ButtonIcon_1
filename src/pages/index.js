import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.scss";




export default function testpage() {
  return (
    <Layout>
      <Container fluid className={styles.mainContainer}>
          <h1>Test</h1>
      </Container>
    </Layout>
  );
}
