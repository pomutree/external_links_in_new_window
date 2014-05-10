(function()
{
        /**
         * Need to be bound to the DOM object of the relevant A element on call
         */
        var handleAnchor = function()
        {
                //if (-1 != this.className.indexOf('external'))
                {
                        this.target = '_blank';
                }
        };

        if (document.observe)
        {
                // redmine uses prototype so use it.

                document.observe('dom:loaded', function()
                {
                        var links = $$('div.attachments a, a.external');
                        for (var i = 0; i < links.length; i++)
                        {
                                handleAnchor.call(links[i]);
                        }
                });
        }
        else if (window.jQuery)
        {

                // redmine uses jQuery so use it.

                jQuery(document).ready(function()
                {
                        jQuery('div.attachments a, a.external').each(handleAnchor);
                });
        }
        else
        {
                console.error('(redmine_open_links_in_new_window) JS-framework is unknown!');
        }
})();
