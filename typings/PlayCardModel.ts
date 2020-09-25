export default interface PlayCardModel {
  backgroundImage: NodeRequire;
  backgroundColor: string;
  color: string;
  title: string;
  description: string;
  buttonTitle: string;
  buttonHandler: () => void;
};
