import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const ResumeUploadScreen = () => {
  const [resume, setResume] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const navigation = useNavigation(); // Get the navigation object

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ], // Accept PDF and Word files
      });

      if (!result.canceled) {
        const file = result.assets[0];
        setResume(file);
        setUploadedFileName(file.name);
        Alert.alert('File Selected', `File Name: ${file.name}`);
      } else {
        Alert.alert('No file selected', 'Please select a file to upload.');
      }
    } catch (error) {
      console.error('Error picking document:', error);
      Alert.alert('Error', 'Unable to pick document. Please try again.');
    }
  };

  const handleUpload = () => {
    if (!resume) {
      Alert.alert('Error', 'Please select a resume to upload.');
      return;
    }

    Alert.alert('Upload', `Uploading ${resume.name}...`);
    setUploadedFileName(resume.name);

    // Navigate to the ResumeDetailsScreen after successful upload
    navigation.navigate('ResumeDetailsScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Resume Checker</Text>
    </View>
      <View style={styles.card}>
        <Text style={styles.title}>Upload Resume File</Text>
        
        <TouchableOpacity style={styles.selectButton} onPress={pickDocument}>
          <Text style={styles.buttonText}>Choose file</Text>
        </TouchableOpacity>

        {resume ? (
          <Text style={styles.fileName}>{resume.name}</Text>
        ) : (
          <Text style={styles.fileName}>No file chosen</Text>
        )}

        <Text style={styles.helperText}>
          Please upload a valid file (PDF or Word). Size should not exceed 2MB.
        </Text>

        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Text style={styles.uploadButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 16,
  },
  headerContainer: {
    
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',  // Position the header at the top
    top: 200,  // Set margin from the top (adjust as needed)
    width: '100%',  // Make it stretch across the screen
    zIndex: 1, // Ensure it is above other content
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // White text color
    textTransform: 'uppercase', // Make the text uppercase
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    width: '90%',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  selectButton: {
    backgroundColor: '#07498E',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  fileName: {
    fontSize: 16,
    color: '#666',
    marginVertical: 15,
    textAlign: 'center',
  },
  helperText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ResumeUploadScreen;
