## Redmine Plugin - Open external links in new window

### About

Make external & attachment links open new browser windows.
(Site-local links are still opened in the same window.)

No configuration, no DB dependency.

### Compatibility

Tested with Redmine 2.3.1.
The base version (which also opened various local links in new window),
was tested with Redmine 0.9.6, 1.0.5, 2.1.0.

### Installation

Download the sources and put them into your Redmine `plugins` folder.

    $ cd {REDMINE_ROOT}
    $ git clone git://github.com/lunakid/redmine_open_links_in_new_window.git plugins/redmine_open_links_in_new_window

Restart Redmine and have a fun!

### Changelog:

#### This fork:

* Only open external & attachment links in new window.

#### Base (forked) versions:
#### 0.0.3

* Made compatible with Redmine 2.1.0 and above - thanks to @logical-and.

#### 0.0.2

* Links with external class also will be opened in new window - thanks to Florian Berninger.

#### 0.0.1

* First public release.
