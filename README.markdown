## Redmine plugin: External links in new window

### About

Make external & attachment links open in new browser windows.
Redmine's own links are still opened in the same (application) window.

No configuration, no DB dependency.

### Compatibility

Tested with Redmine 2.3.1.

The base version (which opened new windows for various Redmine-local links, too),
was tested with Redmine 0.9.6, 1.0.5, 2.1.0, but this update made too many small
changes, so regression testing would be needed!

Note: this vairant is incompatible with the original (base) version -- only one 
will work, if both are installed. (But they will not crash, as I changed the 
relevant identifiers to avoid collisions.)

### Installation

Download the sources and put them into your Redmine `plugins` folder.

    $ cd {REDMINE_ROOT}
    $ git clone git://github.com/lunakid/external_links_in_new_window.git plugins/external_links_in_new_window

Restart Redmine and have a fun!

### Changelog:

#### This fork:

* Only open external & attachment links in new window.

#### Base versions:
#### 0.0.3

* Made compatible with Redmine 2.1.0 and above - thanks to @logical-and.

#### 0.0.2

* Links with external class also will be opened in new window - thanks to Florian Berninger.

#### 0.0.1

* First public release.
