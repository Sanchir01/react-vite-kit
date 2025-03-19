import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { compression } from 'vite-plugin-compression2'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		compression({
			algorithm: 'gzip',
			threshold: 1024
		})
	],
	resolve: {
		alias: {
			'~': '/src'
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true
			}
		}
	}
})
