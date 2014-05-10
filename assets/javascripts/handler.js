(function()
{
        /**
         * Needs to be bound to the DOM object of the relevant A element on call!
         */
        var retarget = function()
        {
                this.target = '_blank';
        };

        if (document.observe)   // Redmine with Prototype?...
        {
                document.observe('dom:loaded', function()
                {
                        var links = $$('div.attachments a, a.external');
                        for (var i = 0; i < links.length; i++)
                        {
                                retarget.call(links[i]);
                        }
                });
        }
        else if (window.jQuery) // Redmine with jQuery?...
        {
                jQuery(document).ready(function()
                {
                        jQuery('div.attachments a, a.external').each(retarget);
                });
        }
        else // Redmine with alien space technology from the future!... :-o
        {
                console.error('[ExternalLinksInNewWindow] Unknown JS-framework!');
        }
})();
