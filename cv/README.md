# CV source

`cv.html` is the source for `public/cv.pdf`. The original HTML was lost; this is a
rebuild matched to the 2026-08-03 PDF (A4, Helvetica Neue, sizes 25.33/13.33/12.66/12/11.33px).

Rebuild the PDF:

    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
      --headless --disable-gpu --no-pdf-header-footer \
      --print-to-pdf=public/cv.pdf cv/cv.html

Chrome ignores `@page { margin }` here and applies its own (~42px top, 68px sides), which is
what the original used. The printable column is 658px wide and roughly 1045px tall; content
taller than that silently spills to a second page, so check the page count after editing:

    python3 -c "import re,sys;d=open('public/cv.pdf','rb').read();print(len(re.findall(rb'/Type\s*/Page[^s]',d)))"
