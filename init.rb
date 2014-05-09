require 'redmine'

require_dependency 'external_link_in_new_window/view_layouts_base_html_head_hook'

Redmine::Plugin.register :external_link_in_new_window do
  name 'External Links In New Window'
  author 'akzhan.abdulin@gmail.com, lunakid@gmail.com'
  description 'Open external & attachment links in new browser windows.'
  version '0.9'
  url 'https://github.com/lunakid/redmine_external_link_in_new_window'
  author_url 'http://github.com/lunakid'
end

