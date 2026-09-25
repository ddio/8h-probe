#!/usr/bin/env python3
"""Render the default social-share card (1200×630) to assets/og-default.png.

Run once locally and commit the result; CI does not have a CJK font installed.
Fonts default to the Noto CJK family shipped with most Linux distributions; override with
OG_FONT_MONO / OG_FONT_SANS (paths to .ttf/.otf/.ttc) if yours live elsewhere.

    python3 scripts/og-image.py
"""
import os
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
PAPER, INK, STEEL, PENCIL = "#FCFBF8", "#2B2B28", "#3B5B75", "#8A8F87"


def find_font(env, families):
    path = os.environ.get(env)
    if path:
        return path
    for fam in families:
        try:
            out = subprocess.check_output(["fc-match", "-f", "%{file}", fam], text=True).strip()
        except (OSError, subprocess.CalledProcessError):
            continue
        if out and fam.split(":")[0].split(" ")[0].lower() in out.lower():
            return out
    sys.exit(f"no font found for {families}; set {env}")


mono_path = find_font("OG_FONT_MONO", ["Noto Sans Mono CJK TC", "Noto Sans Mono"])
sans_path = find_font("OG_FONT_SANS", ["Noto Sans CJK TC", "Noto Sans TC"])

img = Image.new("RGB", (W, H), PAPER)
d = ImageDraw.Draw(img)
margin = 96

# top: section-number motif + rule, echoing the site's numbered sections
d.text((margin, margin), "01", font=ImageFont.truetype(mono_path, 26), fill=PENCIL)
d.line([(margin, margin + 52), (W - margin, margin + 52)], fill=PENCIL, width=2)

# wordmark
d.text((margin - 6, 250), "8h-probe", font=ImageFont.truetype(mono_path, 132), fill=STEEL)

# bottom: rule + domain
d.line([(margin, H - margin - 52), (W - margin, H - margin - 52)], fill=PENCIL, width=2)
d.text((margin, H - margin - 34), "8h-probe.ddio.io", font=ImageFont.truetype(mono_path, 26), fill=PENCIL)

out = os.path.join("assets", "og-default.png")
img.save(out, optimize=True)
print(f"{out}: {os.path.getsize(out) // 1024} KB")
