import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// build: {
	// 	outDir: 'build' // Ensure this matches what you have in the Dockerfile
	//   }
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';