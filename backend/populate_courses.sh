#!/bin/bash

python3 console.py <<EOF
create Course id="f6b4981b-815a-4abd-b107-c231eb097c22" title="Introduction_to_HTML_&_CSS" description="Learn_the_fundamentals_of_web_development_with_HTML_and_CSS_to_create_basic_web_pages." duration="3_hours" level="Beginner" image="images/image7.jpg" syllabus="[Basic_HTML_structure_and_elements,CSS_styling_and_layouts,Building_responsive_web_pages,Interactive_elements_with_forms]"
create Course id="0b206260-38f5-4748-aef7-d7fb74b6bae7" title="JavaScript_Basics" description="Get_started_with_JavaScript_programming." duration="4_hours" level="Beginner" image="/images/image12.jpg" syllabus="[Variables_and_data_types,Control_structures_and_loops,Functions_and_scope,DOM_manipulation]"
create Course id="585dfc68-5271-417a-b83e-466362c7b6f1" title="Advanced_JavaScript" description="Deep_dive_into_advanced_JavaScript_concepts." duration="6_hours" level="Advanced" image="/images/profile1.jpg" syllabus="[Closures_and_callbacks,Promises_and_async/await,Higher-order_functions,Event_handling_in_JavaScript]"
EOF
