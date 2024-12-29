import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const Terms = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>

      <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
      <Text style={styles.sectionText}>
        By accessing and using Hamro Shop, you acknowledge that you have read, understood, and agree to these Terms and Conditions. These terms apply to all users of the app, including without limitation users who are vendors, customers, or contributors of content.
      </Text>

      <Text style={styles.sectionTitle}>2. Use of the App</Text>
      <Text style={styles.sectionText}>
        You must be at least 18 years old to use Hamro Shop or have the consent of a legal guardian. You agree to use the app only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the app.
      </Text>

      <Text style={styles.sectionTitle}>3. Privacy Policy</Text>
      <Text style={styles.sectionText}>
        Our Privacy Policy describes how we handle the information you provide to us when you use Hamro Shop. By using our app, you agree to the collection and use of your data in accordance with our Privacy Policy.
      </Text>

      <Text style={styles.sectionTitle}>4. Purchases and Payments</Text>
      <Text style={styles.sectionText}>
        All purchases made through Hamro Shop are subject to availability. We reserve the right to refuse or cancel any order at our discretion. Prices listed in the app are in [currency] and may be subject to change without notice.
      </Text>

      <Text style={styles.sectionTitle}>5. Returns and Refunds</Text>
      <Text style={styles.sectionText}>
        Please refer to our Return and Refund Policy within the app for information on our policies regarding returns, exchanges, and refunds.
      </Text>

      <Text style={styles.sectionTitle}>6. User Content and Conduct</Text>
      <Text style={styles.sectionText}>
        By posting content on Hamro Shop, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content. You agree not to upload or share content that is harmful, offensive, or illegal.
      </Text>

      <Text style={styles.sectionTitle}>7. Limitation of Liability</Text>
      <Text style={styles.sectionText}>
        Hamro Shop and its affiliates are not liable for any damages arising from your use of the app. This includes, without limitation, damages for loss of data or profit or due to business interruption.
      </Text>

      <Text style={styles.sectionTitle}>8. Changes to Terms and Conditions</Text>
      <Text style={styles.sectionText}>
        Hamro Shop reserves the right to modify or replace these Terms and Conditions at any time. We will notify you of significant changes, and your continued use of the app constitutes acceptance of any updates.
      </Text>

      <Text style={styles.sectionTitle}>9. Contact Us</Text>
      <Text style={styles.sectionText}>
        If you have any questions about these Terms and Conditions, please contact us at [Contact Information].
      </Text>
    </ScrollView>
  );
};

export default Terms;

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
