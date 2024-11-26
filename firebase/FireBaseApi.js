import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    collection,
    addDoc,
    getDocs,
    query,
    where 
} from 'firebase/firestore';

class FirebaseApi {
    constructor() {
        // Your Firebase configuration object from Firebase Console
        const firebaseConfig = {
            apiKey: "AIzaSyCLXqeaqd6oNsd4lJ47M-h0VNtxin0_swE",
            authDomain: "bhd10-8a30d.firebaseapp.com",
            projectId: "bhd10-8a30d",
            storageBucket: "bhd10-8a30d.firebasestorage.app",
            messagingSenderId: "413037593495",
            appId: "1:413037593495:web:79debb18c56afcda23bad2",
            measurementId: "G-05PP9RDNCS"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        this.auth = getAuth(app);
        this.googleProvider = new GoogleAuthProvider();
        this.analytics = getAnalytics(app);
        this.db = getFirestore(app);
    }

    // Google Sign In method
    async signInWithGoogle() {
        try {
            const result = await this.signInWithGoogle(this.auth, this.googleProvider);
            return result.user;
        } catch (error) {
            console.error('Error signing in with Google:', error);
            throw error;
        }
    }

    // Sign Out method
    async signOut() {
        try {
            await this.auth.signOut();
            this.logAnalyticsEvent('logout');
        } catch (error) {
            console.error('Error signing out:', error);
            throw error;
        }
    }

    // Add analytics logging method
    logAnalyticsEvent(eventName, eventParams = {}) {
        try {
            logEvent(this.analytics, eventName, eventParams);
        } catch (error) {
            console.error('Error logging analytics event:', error);
        }
    }

    // Add document to collection
    async addDocument(collectionName, data) {
        try {
            const docRef = await addDoc(collection(this.db, collectionName), {
                ...data,
                createdAt: new Date(),
            });
            return docRef.id;
        } catch (error) {
            console.error('Error adding document:', error);
            throw error;
        }
    }

    // Add document with custom ID
    async setDocument(collectionName, docId, data) {
        try {
            await setDoc(doc(this.db, collectionName, docId), {
                ...data,
                updatedAt: new Date(),
            });
            return docId;
        } catch (error) {
            console.error('Error setting document:', error);
            throw error;
        }
    }

    // Get document by ID
    async getDocument(collectionName, docId) {
        try {
            const docRef = doc(this.db, collectionName, docId);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() };
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error getting document:', error);
            throw error;
        }
    }

    // Get all documents from a collection
    async getCollection(collectionName) {
        try {
            const querySnapshot = await getDocs(collection(this.db, collectionName));
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error getting collection:', error);
            throw error;
        }
    }

    // Get documents with query
    async queryDocuments(collectionName, field, operator, value) {
        try {
            const q = query(
                collection(this.db, collectionName), 
                where(field, operator, value)
            );
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error querying documents:', error);
            throw error;
        }
    }
}

export default FirebaseApi;