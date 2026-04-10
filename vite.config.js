import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserOrOrgPageRepo = repositoryName.endsWith('.github.io')
const base = repositoryName && !isUserOrOrgPageRepo ? `/${repositoryName}/` : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
