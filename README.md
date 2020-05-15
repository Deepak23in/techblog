## Prerequisite

Node 12.0 or higher

## Clone the Repo and run locally

`Git clone https://github.com/leancoder23/techblog.git`

## Install dependencies

`run npm install`

# How to create post

## Add post to existing category

Add new markdown file under folder posts->[specific category]
Add frontmatter for the new post at the top and the post title

## Add local image to post

Copy image to image folder and refer image url to by passing to url filter e.g. `{{<relative path of image> | url}}`

## Add new post category

* Create a new folder specific to the category under posts folder
* Add [folder name].json
* Add following json

```
{
"layout": "post-layout.liquid",
"tags": ["post"]
}
```

* Add index.md in this folder and add following contents

```
---
layout: postList-layout.liquid
 tagName: 
 override:tags: []
---
```