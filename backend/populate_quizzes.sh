#!/bin/bash

python3 console.py <<EOF
create Quiz course_id="f6b4981b-815a-4abd-b107-c231eb097c22" title="Introduction_to_HTML_&_CSS" description="Learn_the_fundamentals_of_web_development_with_HTML_and_CSS_to_create_basic_web_pages." time_limit=30 id="2cdfb2f0-90f3-4aff-92c0-d73855d674a9"
create Quiz course_id="0b206260-38f5-4748-aef7-d7fb74b6bae7" title="JavaScript_Basics" description="Get_started_with_JavaScript_programming." time_limit=30 id="92cc9bd1-d54c-4fa6-986f-f7d8946ddd28"
create Quiz course_id="585dfc68-5271-417a-b83e-466362c7b6f1" title="Advanced_JavaScript" description="Deep_dive_into_advanced_JavaScript_concepts." time_limit=30 id="7017c8c4-4569-4695-9932-eb97664d3305"
EOF
