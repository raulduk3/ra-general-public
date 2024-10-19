---
title: IPHS 484 Senior Research Seminar
---
#kenyon
[Syllabus]()
[[Large Language Model-Based Film Recommendation System]]
# General Notes
- [Pinecone RAG reading](https://www.pinecone.io/blog/rag-study/?utm_medium=email&_hsmi=291465818&_hsenc=p2ANqtz-8BkK6a5sNESZpTAzpa_O6v2ic266fEMZvMpBhnYwL6M1oTXoX1yKizjtE5q-e8gPPo22cXtCHTHGnsLZrp7jHKJ7SYyQ&utm_content=291465816&utm_source=hs_email)
- [MOE Explanation](https://huggingface.co/blog/moe)
- [AWS ML Pipeline](https://aws.amazon.com/training/classroom/the-machine-learning-pipeline-on-aws/)
- [RAG Paper](https://www.pinecone.io/blog/rag-study/?utm_medium=email&_hsmi=291465818&_hsenc=p2ANqtz-8BkK6a5sNESZpTAzpa_O6v2ic266fEMZvMpBhnYwL6M1oTXoX1yKizjtE5q-e8gPPo22cXtCHTHGnsLZrp7jHKJ7SYyQ&utm_content=291465816&utm_source=hs_email)
- [TMDb Search Endpoint](https://developer.themoviedb.org/reference/search-movie)
# Assignments/Deadlines
- [x] submit final poster ⏫ 📅 2024-04-29 ✅ 2024-04-30
	- [x] implement module 5. Assess each discovered films against user profile to generate final recommendations ✅ 2024-04-29
	- [x] implement module 4. Discover movies by generating a tailored API request ✅ 2024-04-24
	- [x] implement module 1. Ingest a list of favorite films ✅ 2024-04-07
	- [x] implement module 2. Create document of movie metadata ✅ 2024-04-07
	- [x] implement module 3. Create a description of user preferences ✅ 2024-04-24
- [x] build prototype of [[Large Language Model-Based Film Recommendation System]] 📅 2024-04-15 ✅ 2024-04-17
- [x] project updates 🔁 every week 📅 2024-04-30 ✅ 2024-04-29
- [x] project updates 🔁 every week 📅 2024-04-23 ✅ 2024-04-26
- [x] project updates 🔁 every week 📅 2024-04-16 ✅ 2024-04-18
- [x] project updates 🔁 every week 📅 2024-04-09 ✅ 2024-04-11
- [x] project updates 🔁 every week 📅 2024-04-02 ✅ 2024-04-06
- [x] project updates 🔁 every week 📅 2024-03-26 ✅ 2024-03-27
- [x] project updates 🔁 every week 📅 2024-03-19 ✅ 2024-03-20
- [x] project updates 🔁 every week 📅 2024-03-12 ✅ 2024-02-29
- [x] project updates 🔁 every week 📅 2024-03-05 ✅ 2024-02-29
- [x] project updates 🔁 every week 📅 2024-02-27 ✅ 2024-02-27
- [x] project updates 🔁 every week 📅 2024-02-20 ✅ 2024-02-21
- [x] project updates 🔁 every week 📅 2024-02-14 ✅ 2024-02-14
- [x] download relevant dataset 📅 2024-01-31 ✅ 2024-02-01
## Presentation Outline
### Abstract
* Overview: Briefly introduce the aim of the project—creating a personalized film recommendation system using a CLI that integrates retrieval-augmented generation (RAG) with semantic search.
* Key Features: Highlight the use of Node.js, interaction with external APIs (OMDb, TMDb), and the integration of OpenAI's language models.
* Significance: Emphasize the system's potential to transform user interactions with digital media platforms through technology.
### Implementation
* System Architecture: Discuss the modular design, focusing on how each component (data retrieval, processing, user interaction, and recommendation logic) contributes to system efficiency and responsiveness.
* Technologies Used: Detail the technical stack, including Node.js for backend operations, fetch API for asynchronous data handling, and LangChain for integrating language models.
* Process Flow: Explain the sequence from user input through to recommendation output, showing how data flows through the system.
### Conclusion
* Achievements: Summarize the strengths of the system, such as its adaptability to user preferences and its ability to leverage cutting-edge AI for enhanced recommendation accuracy.
* Limitations: Acknowledge the non-deterministic nature of LLMs, which can lead to inconsistent outputs. Discuss how this affects the predictability and reliability of recommendations.
* Future Directions: Suggest improvements, including the potential for creating a proprietary film metadata database and enhancing the explainability of AI decisions through more advanced RAG techniques.
### Limitations
* Non-Determinism of LLMs: Clarify that language models, including those used in your system, sometimes generate inconsistent results due to their probabilistic nature. This can affect the system's reliability in delivering consistent recommendations.
* Data Dependency: Mention the system's dependency on external APIs for data, which could limit control over the data quality and availability.
Competitive Advantage of RAG
* Explainability through RAG: Position the RAG architecture as a competitive advantage by emphasizing its capacity for explainability. Explain how integrating retrieval with generative processes helps in creating a traceable and understandable chain of thought, making AI decisions more transparent to users.
* User Trust: Discuss how explainability1 contributes to user trust, as users can see the reasoning behind each film recommendation.
### Potential Improvements
* Large Dataset Utilization: Propose the acquisition of a large dataset of film recommendations from cinema experts to fine-tune the local models, enhancing the system’s accuracy and relevance.
* Model Training: Suggest possibilities for training local models on specific genres or user demographics to refine recommendation precision.
* Feedback Loop: Highlight the potential for implementing a user feedback system to continuously refine and adjust recommendations based on real user responses.