# -*- coding: utf-8 -*-
"""Generate an elegant Hebrew (RTL) CV PDF for Linor Mor."""
from fpdf import FPDF

OUT = r"C:/Users/molin/OneDrive/Documents/אישי לינור/פיתוח אישי/CV WEB/public/cv-he.pdf"
ARIAL = r"C:/Windows/Fonts/arial.ttf"
ARIAL_BD = r"C:/Windows/Fonts/arialbd.ttf"

# Palette (print-friendly light with navy + gold)
NAVY = (9, 12, 21)
NAVY_SOFT = (28, 34, 52)
GOLD = (176, 137, 39)       # WCAG-friendly gold on light
GOLD_BRIGHT = (201, 162, 39)
INK = (28, 30, 38)
GREY = (90, 96, 110)
LINE = (222, 220, 212)
CREAM = (250, 249, 246)

PAGE_W = 210
MARGIN = 16
CONTENT_W = PAGE_W - 2 * MARGIN


class CV(FPDF):
    def header(self):
        pass

    def footer(self):
        self.set_y(-12)
        self.set_font("arial", "", 8)
        self.set_text_color(*GREY)
        self.cell(0, 6, "linor mor  ·  molinor123@gmail.com", align="C")


pdf = CV(orientation="P", unit="mm", format="A4")
pdf.add_font("arial", "", ARIAL)
pdf.add_font("arial", "B", ARIAL_BD)
pdf.set_auto_page_break(auto=True, margin=16)
pdf.set_text_shaping(True)  # harfbuzz + bidi for proper Hebrew RTL
pdf.add_page()

R = "R"  # right align for Hebrew


def rtl(txt, w=CONTENT_W, h=6.2, size=10.5, style="", color=INK, ln=True, lh=None):
    pdf.set_font("arial", style, size)
    pdf.set_text_color(*color)
    pdf.set_x(MARGIN)
    pdf.multi_cell(w, lh or h, txt, align=R, new_x="LMARGIN", new_y="NEXT" if ln else "TOP")


def section_title(txt):
    pdf.ln(1.6)
    y = pdf.get_y()
    pdf.set_font("arial", "B", 12.5)
    pdf.set_text_color(*NAVY)
    pdf.set_x(MARGIN)
    pdf.cell(CONTENT_W, 6.4, txt, align=R, new_x="LMARGIN", new_y="NEXT")
    # gold underline on the right
    pdf.set_draw_color(*GOLD)
    pdf.set_line_width(0.6)
    yl = pdf.get_y() + 0.4
    pdf.line(MARGIN + CONTENT_W - 34, yl, MARGIN + CONTENT_W, yl)
    pdf.ln(2.2)


# ---------- Header band ----------
pdf.set_fill_color(*NAVY)
pdf.rect(0, 0, PAGE_W, 42, style="F")
pdf.set_xy(MARGIN, 11)
pdf.set_font("arial", "B", 26)
pdf.set_text_color(255, 255, 255)
pdf.cell(CONTENT_W, 11, "לינור מור", align=R, new_x="LMARGIN", new_y="NEXT")
pdf.set_x(MARGIN)
pdf.set_font("arial", "", 11.5)
pdf.set_text_color(*(217, 185, 107))
pdf.cell(CONTENT_W, 7, "PMO  ·  ניהול ובקרת פרויקטים  ·  הנדסת תעשייה וניהול", align=R,
         new_x="LMARGIN", new_y="NEXT")
pdf.set_x(MARGIN)
pdf.set_font("arial", "", 9.5)
pdf.set_text_color(210, 214, 224)
pdf.cell(CONTENT_W, 6, "רמת גן, ישראל  ·  molinor123@gmail.com  ·  linkedin.com/in/linormor",
         align=R, new_x="LMARGIN", new_y="NEXT")

pdf.set_y(48)

# ---------- Summary ----------
section_title("תקציר")
rtl("בעלת רקע בניהול ובקרת פרויקטים עם בסיס של הנדסת תעשייה וניהול. מנהלת Roadmap, "
    "אבני דרך ומחזיקי עניין; בונה דאשבורדי KPI ודוחות ניהוליים, מנתחת דאטה ומזהה חריגות. "
    "רקורד מוכח (צמיחה פי 20, שיפור תהליכים) לצד שליטה גבוהה ב-Excel וב-Jira. מחפשת תפקיד "
    "PMO / ניהול ובקרת פרויקטים בהייטק הישראלי — ואוהבת את העבודה הקשה והמעשית.",
    size=9.8, lh=5.2, color=GREY)

# ---------- Experience ----------
section_title("ניסיון תעסוקתי")

EXPERIENCE = [
    ("Buyverse  (נרכשה ע״י Keyz)", "Product Manager", "2025 — 2026", [
        "ניהול Roadmap וספרינטים ב-Jira; יישור קו בין פיתוח, עיצוב ושיווק סביב אבני דרך ברורות של Delivery.",
        "בניית מסגרת KPI ודאשבורד הנהלה ב-Looker Studio — צמיחה, Activation, Retention והמרה — לשקיפות מלאה מול ההנהלה.",
        "מיפוי הפאנל מקצה לקצה; זיהוי 3 נקודות נשירה קריטיות והובלת תיקונים ששיפרו את ה-Activation ב-32%.",
        "הגדלת תנועת הפלטפורמה מ-100 ל-2,000 משתמשים חודשיים (פי 20); הכנת מצגת התובנות שתמכה ב-Due Diligence וברכישה.",
    ]),
    ("Talia Chriqui Consulting", "Operations & Program Manager", "2024 — 2025", [
        "ניהול תוכניות Delivery ל-8+ עסקים — Scoping, אבני דרך ויישור מחזיקי עניין מ-Kickoff ועד אימוץ.",
        "עיצוב דאשבורדים בזמן אמת ב-Looker Studio; ייעול תהליכים תפעוליים — חיסכון של 7 שעות בשבוע בממוצע ללקוח.",
        "הובלת ניהול שינוי בכל הטמעה — אימוץ מלא תוך 3—4 שבועות; שיפור המרת ליד-ללקוח ב-35% בממוצע.",
    ]),
    ("Hitech Insurance", "Business Development", "2023 — 2024", [
        "ניהול Pipeline של לקוחות ב-CRM ומעקב אחר רצפי פנייה והמרה בכל שלב; תיאום תוכנית רב-ערוצית ועמידה ביעדים חודשיים.",
    ]),
    ("Kantar", "Research Executive", "2021 — 2022", [
        "תכנון, תיאום וניהול פרויקטי מחקר שוק מקצה לקצה; ניהול צוות וניתוח דאטה לתובנות מעשיות.",
    ]),
    ("צה״ל", "מנהלת משאבי אנוש · תוכנית מילואים", "2017 — 2019", [
        "הובלת תוכניות הכשרה ומילואים; ניתוח דוחות ב-Excel וב-CRM הצבאי ובניית כלי VBA לייעול גיוס.",
    ]),
]

for company, role, period, bullets in EXPERIENCE:
    # company + period row
    pdf.set_x(MARGIN)
    pdf.set_font("arial", "B", 11.5)
    pdf.set_text_color(*NAVY)
    # period (left) — small grey; company (right) — bold
    pdf.cell(40, 6.4, period, align="L")
    pdf.set_xy(MARGIN, pdf.get_y())
    pdf.cell(CONTENT_W, 6.4, company, align=R, new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(MARGIN)
    pdf.set_font("arial", "", 9.8)
    pdf.set_text_color(*GOLD)
    pdf.cell(CONTENT_W, 5.2, role, align=R, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.3)
    for b in bullets:
        # bullet marker on the right
        pdf.set_x(MARGIN)
        pdf.set_font("arial", "", 9.4)
        pdf.set_text_color(*INK)
        pdf.multi_cell(CONTENT_W - 5, 4.8, b, align=R, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1.6)

# ---------- Skills ----------
section_title("כישורים")
rtl("ניהול ובקרת פרויקטים · Roadmapping · ניהול ספרינטים · מעקב אבני דרך וסיכונים · "
    "יישור מחזיקי עניין · ניהול שינוי · דוחות ניהוליים · דאשבורדי KPI · "
    "Excel (מתקדם) · Jira · Monday.com · Looker Studio · Google Analytics · VBA",
    size=10, lh=5.6, color=INK)

# ---------- Education ----------
section_title("השכלה")
for school, degree, year in [
    ("שנקר — הנדסה. עיצוב. אמנות.", "B.Sc. הנדסת תעשייה וניהול", "2026"),
    ("תיכון מקיף ו׳", "תעודת בגרות · מגמת מדעי המחשב", ""),
]:
    pdf.set_x(MARGIN)
    pdf.set_font("arial", "B", 10.3)
    pdf.set_text_color(*NAVY)
    pdf.cell(40, 5.8, year, align="L")
    pdf.set_xy(MARGIN, pdf.get_y())
    pdf.cell(CONTENT_W, 5.8, school, align=R, new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(MARGIN)
    pdf.set_font("arial", "", 9.2)
    pdf.set_text_color(*GREY)
    pdf.cell(CONTENT_W, 5.0, degree, align=R, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1.0)

pdf.output(OUT)
import sys
sys.stdout.reconfigure(encoding="utf-8")
print("WROTE OK, pages:", pdf.pages_count)
