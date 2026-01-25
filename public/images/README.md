# Project Images

Place your project screenshots here.

## How to add images:

1. Add your project screenshots to this folder (e.g., `project1-1.jpg`, `project1-2.jpg`, etc.)
2. Update the `images` array in `/data/config.ts` for each project with the correct paths
3. Image paths should start with `/images/` (e.g., `/images/project1-1.jpg`)

## Example:

For a project with ID 1, you might have:
- `/public/images/project1-1.jpg` (main screenshot)
- `/public/images/project1-2.jpg` (additional screenshot)
- `/public/images/project1-3.jpg` (additional screenshot)

Then in `config.ts`, set:
```typescript
images: [
  "/images/project1-1.jpg",
  "/images/project1-2.jpg",
  "/images/project1-3.jpg",
]
```

## Supported formats:
- JPG/JPEG
- PNG
- WebP
- Any format supported by Next.js Image component
