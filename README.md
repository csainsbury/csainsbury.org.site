# Academic Profile Jekyll Website

This Jekyll-based academic profile website is designed to mimic the look and feel of a professional academic webpage. It features a clean, responsive design with a sidebar navigation system and organized sections for research, publications, teaching, students, and awards.

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Sidebar navigation for easy access to all sections
- Organized content sections for research interests, publications by year, teaching, students, and awards
- Support for profile information with contact details
- Clean, academic-focused styling

## Getting Started

### Prerequisites

- Ruby (version 2.5.0 or higher)
- RubyGems
- GCC and Make (for some gem installations)

### Installation

1. Clone this repository to your local machine:
   ```
   git clone [repository-url] academic-profile
   cd academic-profile
   ```

2. Install Jekyll and other dependencies:
   ```
   bundle install
   ```

3. Run the Jekyll server:
   ```
   bundle exec jekyll serve
   ```

4. View your website at `http://localhost:4000`

## Customizing Your Website

### Profile Information

Edit the `index.md` file to update your profile information, including:
- Name
- Title
- Affiliation
- Contact information
- Profile picture (replace `assets/images/profile.jpg` with your own image)

### Research Interests

Edit the `research.md` file to update your research interests and themes.

### Publications

You have two options for managing publications:
1. Edit the `publications.md` file directly to add your publications manually.
2. Update the `_data/publications.yml` file to manage publications as data, which will be displayed dynamically.

### Teaching, Students, and Awards

Edit the respective markdown files to update information about your:
- Teaching (`teaching.md`)
- Students (`students.md`)
- Awards (`awards.md`)

### Navigation

Update the `_data/navigation.yml` file to modify the navigation links in the sidebar.

### Styling

Customize the look and feel by editing the SCSS files in the `_sass` directory and `assets/css/styles.scss`.

## Deployment

To deploy your website to GitHub Pages:

1. Push your repository to GitHub
2. In your GitHub repository settings, enable GitHub Pages
3. Choose the branch you want to deploy (typically `main` or `gh-pages`)

Alternatively, you can build the site locally and deploy the generated `_site` directory to any web hosting service:

```
bundle exec jekyll build
```

## License

This project is open source and available under the [MIT License](LICENSE).