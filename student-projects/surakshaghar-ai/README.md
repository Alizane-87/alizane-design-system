# SurakshaGhar AI

School AI project: Architectural Design for Sustaining Natural Calamities in India.

A website that checks how safe a house is against earthquake, flood, cyclone, landslide and heat in its state, using a Teachable Machine image model and a transparent risk score, and lists low-cost fixes.

## Run it

Open `index.html` in a browser. No build step or server needed.

## Use your Teachable Machine model

1. Train an image model with four classes named `kutcha`, `masonry`, `rcc`, `stilt`.
2. Export as TensorFlow.js. Either download the files (`model.json`, `metadata.json`, `weights.bin`) and pick them in Step 2 under "Model files", or upload the model and paste its shareable link under "Model link".
3. Upload a house photo. Photos are classified in the browser and never uploaded.

Hazard levels are approximate and state-level. This is a first check, not an engineering certificate.
