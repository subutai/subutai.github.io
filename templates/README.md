# Website Template System

This directory contains reusable HTML templates for easily adding new content to Subutai Ahmad's website. Each template is designed to maintain visual consistency while allowing for easy customization.

## Available Templates

### 1. Research Card (`research-card.html`)
Use this template to add new research areas or topics to the Research section.

**How to use:**
1. Copy the template content
2. Replace the icon emoji with an appropriate symbol
3. Update the title and description
4. Add relevant links (papers, repositories, etc.)
5. Insert into the `research-areas` div in `index.html`

**Example customization:**
```html
<div class="research-card">
    <div class="research-icon">🌐</div>
    <h3>Computer Vision</h3>
    <p>
        Early pioneering work in real-time computer vision systems,
        including hand tracking and gesture recognition applications.
    </p>
    <div class="research-links">
        <a href="asilomar94.pdf" target="_blank">Key Paper</a>
        <a href="https://youtu.be/qDLIjKKiNbI?t=325" target="_blank">Demo Video</a>
    </div>
</div>
```

### 2. Venture Card (`venture-card.html`)
Use this template to add new companies or entrepreneurial ventures.

**How to use:**
1. Copy the template content
2. Add `featured` class for current or highlighted ventures
3. Update company name, role, and years
4. Write a compelling description
5. Add 2-4 key achievements
6. Include a relevant link
7. Insert into the `ventures-grid` div in `index.html`

**Special classes:**
- Add `featured` class to highlight current or most important ventures
- This adds a blue border and "Current" badge

### 3. Paper Card (`paper-card.html`)
Use this template to feature important publications.

**How to use:**
1. Copy the template content
2. Add `featured` class for most important papers
3. Update title, authors, venue, and year
4. Write an accessible abstract
5. Optionally add metrics (citations, impact)
6. Include paper links and supplementary materials
7. Insert into the `papers-grid` div in `index.html`

**Optional elements:**
- Paper badge (e.g., "Most Cited", "Best Paper")
- Metrics section for citation counts and impact
- Multiple links (paper, code, presentation, etc.)

### 4. Timeline Item (`timeline-item.html`)
Use this template to add new entries to the research timeline.

**How to use:**
1. Copy the template content
2. Update the year range
3. Add position/institution title
4. Write a brief description
5. Insert into the `timeline` div in `index.html`

**Note:** Timeline items automatically alternate left/right positioning using CSS nth-child selectors.

## CSS Classes Reference

### Research Cards
- `.research-card` - Base card styling
- `.research-icon` - Icon container (use emojis or font icons)
- `.research-links` - Container for action links

### Venture Cards
- `.venture-card` - Base card styling
- `.venture-card.featured` - Highlighted venture with blue border
- `.venture-header` - Company name and role section
- `.venture-content` - Main content area
- `.venture-achievements` - Container for achievement badges
- `.achievement` - Individual achievement badge
- `.venture-link` - Call-to-action link

### Paper Cards
- `.paper-card` - Base card styling
- `.paper-card.featured` - Highlighted paper with green border
- `.paper-badge` - Special badge (e.g., "Most Cited")
- `.paper-authors` - Author names styling
- `.paper-venue` - Journal/conference styling
- `.paper-abstract` - Abstract text container
- `.paper-metrics` - Optional metrics section
- `.metric` - Individual metric item
- `.paper-links` - Container for paper links

### Timeline Items
- `.timeline-item` - Base timeline entry
- `.timeline-year` - Year badge styling
- `.timeline-content` - Content container

### Buttons
- `.btn` - Base button styling
- `.btn-primary` - Primary action button (blue)
- `.btn-secondary` - Secondary action button (outlined)

## Adding New Content

### To add a new research area:
1. Copy `research-card.html` template
2. Customize content
3. Add to the `research-areas` div in `index.html`

### To add a new venture:
1. Copy `venture-card.html` template
2. Customize content
3. Add `featured` class if it's a current/important venture
4. Add to the `ventures-grid` div in `index.html`

### To add a new featured paper:
1. Copy `paper-card.html` template
2. Customize content
3. Add `featured` class for most important papers
4. Add to the `papers-grid` div in `index.html`

### To add a new timeline entry:
1. Copy `timeline-item.html` template
2. Customize content
3. Add to the `timeline` div in `index.html`
4. Maintain chronological order (newest first)

## Responsive Design

All templates are fully responsive and will adapt to different screen sizes:
- Desktop: Multi-column grid layouts
- Tablet: Reduced columns, maintained spacing
- Mobile: Single column, optimized touch targets

## Accessibility

Templates include:
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader friendly markup

## Performance

- Templates use efficient CSS Grid and Flexbox layouts
- Images should be optimized before adding
- External links include `target="_blank"` and proper security attributes
- Lazy loading is supported for images with `data-src` attributes

## Customization Tips

1. **Icons**: Use emojis for simplicity, or replace with SVG icons for more control
2. **Colors**: The CSS uses CSS custom properties for easy theme customization
3. **Spacing**: Use existing utility classes (`.mb-1`, `.mt-2`, etc.) for consistent spacing
4. **Links**: Always include `target="_blank"` for external links
5. **Content**: Keep descriptions concise but informative
6. **Images**: Optimize images and use appropriate alt text

## Future Enhancements

Consider adding templates for:
- Awards and recognition section
- Speaking engagements
- Media appearances
- Collaborations
- Teaching and mentorship

## Support

For questions about using these templates or customizing the website, refer to the main website documentation or contact the development team.
