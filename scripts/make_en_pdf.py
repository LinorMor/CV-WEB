# -*- coding: utf-8 -*-
"""Generate an elegant English (LTR) PMO CV PDF for Linor Mor."""
from fpdf import FPDF

OUT = r"C:/Users/molin/OneDrive/Documents/אישי לינור/פיתוח אישי/CV WEB/public/cv-en.pdf"
ARIAL = r"C:/Windows/Fonts/arial.ttf"
ARIAL_BD = r"C:/Windows/Fonts/arialbd.ttf"

NAVY = (9, 12, 21)
GOLD = (176, 137, 39)
INK = (28, 30, 38)
GREY = (90, 96, 110)

PAGE_W = 210
MARGIN = 16
CONTENT_W = PAGE_W - 2 * MARGIN


class CV(FPDF):
    def footer(self):
        self.set_y(-12)
        self.set_font("arial", "", 8)
        self.set_text_color(*GREY)
        self.cell(0, 6, "Linor Mor  ·  molinor123@gmail.com", align="C")


pdf = CV(orientation="P", unit="mm", format="A4")
pdf.add_font("arial", "", ARIAL)
pdf.add_font("arial", "B", ARIAL_BD)
pdf.set_auto_page_break(auto=True, margin=16)
pdf.add_page()

L = "L"


def para(txt, size=9.8, style="", color=INK, lh=5.2):
    pdf.set_font("arial", style, size)
    pdf.set_text_color(*color)
    pdf.set_x(MARGIN)
    pdf.multi_cell(CONTENT_W, lh, txt, align=L, new_x="LMARGIN", new_y="NEXT")


def section_title(txt):
    pdf.ln(1.2)
    pdf.set_font("arial", "B", 12.5)
    pdf.set_text_color(*NAVY)
    pdf.set_x(MARGIN)
    pdf.cell(CONTENT_W, 6.2, txt, align=L, new_x="LMARGIN", new_y="NEXT")
    pdf.set_draw_color(*GOLD)
    pdf.set_line_width(0.6)
    yl = pdf.get_y() + 0.3
    pdf.line(MARGIN, yl, MARGIN + 34, yl)
    pdf.ln(1.4)


# ---------- Header band ----------
pdf.set_fill_color(*NAVY)
pdf.rect(0, 0, PAGE_W, 42, style="F")
pdf.set_xy(MARGIN, 11)
pdf.set_font("arial", "B", 26)
pdf.set_text_color(255, 255, 255)
pdf.cell(CONTENT_W, 11, "LINOR MOR", align=L, new_x="LMARGIN", new_y="NEXT")
pdf.set_x(MARGIN)
pdf.set_font("arial", "", 11.5)
pdf.set_text_color(*(217, 185, 107))
pdf.cell(CONTENT_W, 7, "PMO  ·  Project Management & Control  ·  Industrial Engineering",
         align=L, new_x="LMARGIN", new_y="NEXT")
pdf.set_x(MARGIN)
pdf.set_font("arial", "", 9.5)
pdf.set_text_color(210, 214, 224)
pdf.cell(CONTENT_W, 6, "Ramat Gan, Israel  ·  molinor123@gmail.com  ·  linkedin.com/in/linormor",
         align=L, new_x="LMARGIN", new_y="NEXT")

pdf.set_y(45)

# ---------- Summary ----------
section_title("Summary")
para("Project management & control professional with an Industrial Engineering & "
     "Management backbone. I run roadmaps, milestones and stakeholder alignment; build "
     "KPI dashboards and management reports; and analyse data to catch deviations early. "
     "Proven record (20x growth, process improvements), strong Excel and Jira. Seeking a "
     "PMO / project-management role in Israeli tech.", size=9.8, lh=5.0, color=GREY)

# ---------- Experience ----------
section_title("Experience")

EXPERIENCE = [
    ("Buyverse  (acquired by Keyz)", "Product Manager", "2025 — 2026", [
        "Owned the product roadmap and sprint cycles in Jira, aligning dev, design and marketing around clear delivery milestones.",
        "Built the KPI framework and executive dashboard in Looker Studio — growth, activation, retention, conversion — for leadership visibility.",
        "Mapped the full funnel end to end; identified 3 critical drop-off points and drove fixes that lifted activation by 32%.",
        "Scaled platform traffic from 100 to 2,000 monthly users (20x); prepared the insights deck that supported due-diligence and acquisition.",
    ]),
    ("Talia Chriqui Consulting", "Operations & Program Manager", "2024 — 2025", [
        "Ran delivery programs for 8+ SMB clients — scoping, milestones and stakeholder alignment from kickoff through to adoption.",
        "Designed real-time KPI dashboards in Looker Studio; streamlined workflows, saving an average of 7 hours/week per client.",
        "Led change management for every rollout — full adoption within 3-4 weeks; improved lead-to-customer conversion by 35%.",
    ]),
    ("Hitech Insurance", "Business Development", "2023 — 2024", [
        "Managed a CRM prospect pipeline, tracking outreach and conversion at every stage; coordinated a multi-channel plan and hit monthly targets.",
    ]),
    ("Kantar", "Research Executive", "2021 — 2022", [
        "Planned, coordinated and administered market-research projects end to end; supervised staff, tracked progress and analysed data.",
    ]),
    ("Israel Defense Forces", "HR Manager - Reserve Duty Program", "2017 — 2019", [
        "Led HR operations and the reserve-duty program; analysed reports in Excel and the IDF CRM, built a VBA tool, and reported monthly to C-level.",
    ]),
]

for company, role, period, bullets in EXPERIENCE:
    pdf.set_x(MARGIN)
    pdf.set_font("arial", "B", 11)
    pdf.set_text_color(*NAVY)
    pdf.cell(CONTENT_W - 40, 5.7, company, align=L)
    pdf.set_font("arial", "", 9.6)
    pdf.set_text_color(*GREY)
    pdf.cell(40, 5.7, period, align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(MARGIN)
    pdf.set_font("arial", "", 9.5)
    pdf.set_text_color(*GOLD)
    pdf.cell(CONTENT_W, 4.5, role, align=L, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.2)
    for b in bullets:
        pdf.set_x(MARGIN)
        pdf.set_font("arial", "", 9.1)
        pdf.set_text_color(*GOLD)
        pdf.cell(4, 4.3, "•", align="L")  # bullet dot
        pdf.set_text_color(*INK)
        pdf.set_x(MARGIN + 4)
        pdf.multi_cell(CONTENT_W - 4, 4.3, b, align=L, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.5)

# ---------- Skills ----------
section_title("Skills")
para("Project Management & Control  ·  Roadmapping  ·  Sprint Management  ·  Milestone & "
     "Risk Tracking  ·  Stakeholder Alignment  ·  Change Management  ·  Management Reporting  ·  "
     "KPI Dashboards  ·  Excel (advanced)  ·  Jira  ·  Monday.com  ·  Looker Studio  ·  "
     "Google Analytics  ·  VBA", size=10, lh=5.6, color=INK)

# ---------- Education ----------
section_title("Education")
for school, degree, year in [
    ("Shenkar - Engineering. Design. Art.", "B.Sc. Industrial & Management Engineering", "2026"),
    ("Mekif Vav High School", "High School Diploma - Computer Science major", ""),
]:
    pdf.set_x(MARGIN)
    pdf.set_font("arial", "B", 10.3)
    pdf.set_text_color(*NAVY)
    pdf.cell(CONTENT_W - 40, 5.8, school, align=L)
    pdf.set_font("arial", "", 9.5)
    pdf.set_text_color(*GREY)
    pdf.cell(40, 5.8, year, align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(MARGIN)
    pdf.set_font("arial", "", 9.2)
    pdf.set_text_color(*GREY)
    pdf.cell(CONTENT_W, 4.8, degree, align=L, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.6)

pdf.output(OUT)
import sys
sys.stdout.reconfigure(encoding="utf-8")
print("WROTE OK, pages:", pdf.pages_count)
