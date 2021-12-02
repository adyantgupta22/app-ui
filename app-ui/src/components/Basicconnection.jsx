import React, { Component } from 'react';

import {
	DiagramEngine,
	DiagramModel,
	DefaultNodeModel,
	LinkModel,
  DefaultPortModel,
  DiagramWidget,
  DefaultLinkModel
} from "storm-react-diagrams";



var engine = new DiagramEngine();
engine.installDefaultFactories();

var model = new DiagramModel();


var node1 = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
var port1 = node1.addPort(new DefaultPortModel(false, "out-1", "Out"));
node1.x = 100;
node1.y = 100;


var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
var port2 = node2.addPort(new DefaultPortModel(true, "in-1", "IN"));
node2.x = 400;
node2.y = 100;


var link1 = new LinkModel();
link1.setSourcePort(port1);
link1.setTargetPort(port2);

model.addNode(node1);
model.addNode(node2);
model.addLink(link1);


engine.setDiagramModel(model);

class SandboxPage extends Component {
  render() {
    return (
      <div>
        <DiagramWidget diagramEngine={engine} />
      </div>
    );
  }
}

export default SandboxPage;