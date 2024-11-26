import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    onAuthStateChanged, 
    signOut as firebaseSignOut 
} from 'firebase/auth';
import { 
    getAnalytics, 
    logEvent, 
    isSupported as isAnalyticsSupported 
} from 'firebase/analytics';
import { 
    getFirestore, 
    collection, 
    doc, 
    addDoc, 
    setDoc, 
    getDoc, 
    getDocs, 
    query, 
    where 
} from 'firebase/firestore';

class FirebaseApi {
    constructor() {
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
        this.db = getFirestore(app);

        // Initialize analytics only if supported
        isAnalyticsSupported().then((supported) => {
            if (supported) {
                this.analytics = getAnalytics(app);
            } else {
                console.warn('Analytics is not supported in this environment.');
                this.analytics = null;
            }
        }).catch((error) => {
            console.error('Error checking analytics support:', error);
            this.analytics = null;
        });

        // Listen for authentication state changes
        this.auth.onAuthStateChanged(this.authStateChanged.bind(this));
    }

    // Callback to handle auth state change
    authStateChanged(user) {
        if (user) {
            this.currentUser = user.uid;
        } else {
            this.currentUser = null;
        }
    }

    // Check if user is logged in
    isUserExist() {
        return this.currentUser;
    }

    // Google Sign In method
    async signInWithGoogle() {
        try {
            const result = await signInWithPopup(this.auth, this.googleProvider);
            console.log(result);
            this.currentUser = result.user.uid;
        } catch (error) {
            console.error('Error signing in with Google:', error);
            throw error;
        }
    }

    // Sign Out method
    async signOut() {
        try {
            await firebaseSignOut(this.auth);
            this.logAnalyticsEvent('logout');
        } catch (error) {
            console.error('Error signing out:', error);
            throw error;
        }
    }

    // Log analytics events
    logAnalyticsEvent(eventName, eventParams = {}) {
        if (typeof window !== 'undefined' && this.analytics) {
            try {
                logEvent(this.analytics, eventName, eventParams);
            } catch (error) {
                console.error('Error logging analytics event:', error);
            }
        } else {
            console.warn('Analytics event logging skipped (window or analytics not available).');
        }
    }

    // Add document to collection
    async addDocument(collectionName, experience, members, subject, teamName) {
        try {
            const docRef = await addDoc(collection(this.db, collectionName), {
                experience: experience,
                members: members,
                subject: subject,
                teamName: teamName,
                createdAt: new Date(),
            });
            return docRef.id;
        } catch (error) {
            console.error('Error adding document:', error);
            throw error;
        }
    }

    // Set document with a custom ID
    async setDocument(collectionName, docId, firstName, emailAddress, phoneNum, medicalInfo) {
        try {
            // Use a proper unique identifier if phoneNum is not unique
            const docRef = doc(this.db, collectionName, docId);
            await setDoc(docRef, {
                firstName: firstName,
                emailAddress: emailAddress,
                phoneNum: phoneNum,
                medicalInfo: medicalInfo,
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

const firebaseapi = new FirebaseApi();
export default firebaseapi;
