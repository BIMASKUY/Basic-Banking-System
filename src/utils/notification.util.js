import path from 'path'
import { fileURLToPath } from 'url'

export const getFile = (file) => {
    const __filename = fileURLToPath(import.meta.url)
    const utilDir = path.dirname(__filename)
    const srcDir = path.resolve(utilDir, '..')
    const location = path.join(srcDir, 'public', file)
    return location
}