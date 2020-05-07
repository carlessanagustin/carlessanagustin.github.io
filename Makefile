JEKYLL_VERSION ?= 3.8
#JEKYLL_VERSION ?= 4.0
PORTS ?= -p 4000:4000

BLOGNAME ?= blog

# https://github.com/envygeeks/jekyll-docker#readme
builder:
	docker run --rm --volume="${PWD}:/srv/jekyll" -it jekyll/builder:${JEKYLL_VERSION} jekyll build

interactive:
	docker run --rm --volume="${PWD}:/srv/jekyll" ${PORTS} -it jekyll/builder:${JEKYLL_VERSION} bash

# https://jekyllrb.com/docs/
install:
	gem install jekyll bundler

install_deps:
	bundle install

serve:
	bundle exec jekyll serve --host 0.0.0.0

go: install_deps serve

blog:
	jekyll new ${BLOGNAME}