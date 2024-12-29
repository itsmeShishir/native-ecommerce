import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const Policies = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Policies</Text>

      <Text style={styles.sectionTitle}>1. Privacy Policy</Text>
      <Text style={styles.sectionText}>
        At Hamro Shop, we prioritize your privacy. We collect and use your personal information in compliance with applicable laws to provide and improve our services. For details on data collection and processing, please review our full Privacy Policy.
      </Text>

      <Text style={styles.sectionTitle}>2. Data Security Policy</Text>
      <Text style={styles.sectionText}>
        We implement industry-standard security measures to protect your data. However, while we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
      </Text>

      <Text style={styles.sectionTitle}>3. Shipping Policy</Text>
      <Text style={styles.sectionText}>
        Hamro Shop offers shipping services across designated areas. Delivery times and costs are provided at checkout, and any shipping delays will be communicated to you as soon as possible.
      </Text>

      <Text style={styles.sectionTitle}>4. Return and Refund Policy</Text>
      <Text style={styles.sectionText}>
        You may return products within [specified days] of delivery, provided they are in original condition. Refunds will be processed within [specified time] days of receiving the returned item. Please refer to our Return and Refund Policy for full details.
      </Text>

      <Text style={styles.sectionTitle}>5. Payment Policy</Text>
      <Text style={styles.sectionText}>
        We accept payments via [list accepted payment methods]. Payment is required in full at the time of purchase. All prices listed are in [currency] and include applicable taxes.
      </Text>

      <Text style={styles.sectionTitle}>6. Customer Support Policy</Text>
      <Text style={styles.sectionText}>
        Our support team is available to assist you with any inquiries or issues. You can contact us via [support contact information] during business hours. We aim to respond within 24-48 hours.
      </Text>

      <Text style={styles.sectionTitle}>7. Content and Copyright Policy</Text>
      <Text style={styles.sectionText}>
        All content on Hamro Shop, including images and text, is the property of Hamro Shop or its content suppliers and is protected by intellectual property laws. Unauthorized use of content is strictly prohibited.
      </Text>

      <Text style={styles.sectionTitle}>8. Modification of Policies</Text>
      <Text style={styles.sectionText}>
        Hamro Shop reserves the right to modify these policies at any time. We will notify users of significant changes, and continued use of our services constitutes acceptance of the updated policies.
      </Text>

      <Text style={styles.sectionTitle}>9. Contact Information</Text>
      <Text style={styles.sectionText}>
        For any questions regarding our policies, please reach out to us at [Contact Information].
      </Text>
    </ScrollView>
  );
};

export default Policies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    color: '#333',
  },
  sectionText: {
    fontSize: 16,
    marginTop: 8,
    color: '#666',
    lineHeight: 22,
  },
});
