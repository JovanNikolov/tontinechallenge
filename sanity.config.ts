import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {schemaTypes} from './sanity/schemas';
import { visionTool } from '@sanity/vision';

export default defineConfig({
    name: 'default',
    title: "Tontine Challenge",
    apiVersion: "2022-03-07",
    projectId: "ikxdvz9o",
    dataset: "production",
    basePath: "/admin",
    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
      },
})
