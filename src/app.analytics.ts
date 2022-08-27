// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8whAvovbSza96OrcMSk7ghqgeh_CXOY0",
  authDomain: "chart-trappin.firebaseapp.com",
  projectId: "chart-trappin",
  storageBucket: "chart-trappin.appspot.com",
  messagingSenderId: "583280403242",
  appId: "1:583280403242:web:27688020bf10fda924f453",
  measurementId: "G-F16C8XFZH4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('Analytics Included In Project: ', analytics.app.name)