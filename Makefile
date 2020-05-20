# https://pages.github.com/versions/
# 4.0 | 3.8.5
JEKYLL_VERSION ?= 4.0
# jekyll/builder: | jekyll/minimal: | jekyll/jekyll:
JEKYLL_IMAGE ?= jekyll/builder:

PORTS ?= -p 4000:4000
BLOGNAME ?= blog


interactive:
	docker run --rm --volume="${PWD}:/srv/jekyll" ${PORTS} -it ${JEKYLL_IMAGE}${JEKYLL_VERSION} bash

# https://jekyllrb.com/docs/
install:
	gem install jekyll bundler

install_deps:
	-bundle install
	-bundle update

serve:
	bundle exec jekyll serve --host 0.0.0.0

go: install install_deps serve



blog:
	jekyll new ${BLOGNAME}
