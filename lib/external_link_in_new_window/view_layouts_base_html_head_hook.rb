module ExternalLinkInNewWindow
  class ViewLayoutsBaseHtmlHeadHook < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context = {})
      javascript_include_tag('handler.js', :plugin => :external_link_in_new_window)
    end
  end
end

