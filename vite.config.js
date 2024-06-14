import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import dotenv from 'dotenv';

// dotenv.config();

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
		  '^/api': {
			target: 'https://localhost:32770/', // Your API server URL
			changeOrigin: true,
			secure: false,
		  },
		}
	}
	// build: {
	// 	outDir: 'build' // Ensure this matches what you have in the Dockerfile
	//   }
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';