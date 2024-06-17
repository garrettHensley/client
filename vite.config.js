import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
		  '^/api': {
			target: "https://buildlockapi.azurewebsites.net/", // Your API server URL
			changeOrigin: true,
			secure: false,
		  },
		}
	}
	// build: {
	// 	outDir: 'build' // Ensure this matches what you have in the Dockerfile
	//   }
});
// console.log('VITE_APP_API_URL', import.meta.env.VITE_API_URL.toString());
console.log('url is', process.env.VITE_API_URL)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';