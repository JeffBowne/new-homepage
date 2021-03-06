# About building my Homepage

My previous personal website that I built while in coding bootcamp was just one big HTML file. Quick and dirty. So, I decided to build a new website using some of the good code habits I've developed over the past couple of years. I used BEM name-spacing for class names and organized my stylesheet partials in a way that reflects ITCSS.

## Jumping through a few hoops so that I could build with Haml. 

From the get-go I knew that I wanted to write Haml for markup and use Sass for styles. I love Haml because it’s so clean and concise. I like using GitHub Pages to host all my static sites so I wanted to find a way to make that work with Haml and Sass. I looked into Jekyll. With Jekyll using Sass is no problem but, unfortunately, while Jekyll does work with Haml via plugins, GitHub Pages doesn't support those plugins. 

So, I wrote a Ruby module that does the markup conversion locally before committing the result to GitHub. The module also updates the site as I'm developing by working with Jekyll Serve. It reads all Haml files from the source directory and detects changes by comparing the file's modified time to that of the HTML file of the same name, if one exists, and does a system call for haml to convert the file. Additionally, after detecting a change in one or more partial files and converting them, it regenerates the index template file which renders the partials. Jekyll Serve then regenerates the site. 

## The code I wrote versus the code that Jekyll generates.

Jekyll ignores any directory who’s name begins with an underscore. The Haml markup I wrote is in the `_haml` directory - all the partials in the `partials` directory and the `index.haml` template that renders the partials. The parent directory’s `index.html` and the files in the `generated_html` directory are the files generated by my Ruby plugin. As for stylesheets, I used `css/styles.scss` as a manifest that imports the scss files from the `_sass` directory. My Ruby plugin lives in the `_plugins` directory and my JavaScript file `animations.js` lives in the parent directory.
