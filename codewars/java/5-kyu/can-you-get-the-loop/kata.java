import java.util.ArrayList;

class LoopInspector {

    public int loopSize(Node node) {
        ArrayList<Node> nodes = new ArrayList<Node>();

        var current = node;
        while (!nodes.contains(current)) {
            nodes.add(current);
            current = current.getNext();
        }

        return nodes.size() - nodes.indexOf(current);
    }

}