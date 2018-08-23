# About building my Homepage

My previous personal website was just one big HTML file. Quick and dirty. So, I decided to build a new website from scratch using some of the good code habits I've developed over the past couple of years. 

## Jumping through a few hoops so that I could build with Haml. 

My first decision was that I wanted to write Haml and Sass, and use partial file structure for both. I love Haml because I think it’s so clean and concise. I use GitHub Pages to host my static sites so I wanted to work out a way to make that work with Haml and Sass. I looked into Jekyll. Sass was no problem but, unfortunately, while Jekyll does work with Haml via plugins, GitHub Pages doesn't support those plugins. 

So, I wrote a Ruby module that does the markup conversion locally before committing the result to GitHub. The module also updates the site as I'm developing by working with Jekyll Serve. It reads all Haml files from the source directory and detects changes by comparing the file's modified time to that of the HTML file of the same name, if one exists, and does a system call for haml to convert the file. Jekyll Serve then regenerates the site. 

I used BEM name-spacing for class names and organized my partials in a way that reflects ITCSS.
