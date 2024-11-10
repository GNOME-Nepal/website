{
  description = "Website for Gnome-Nepal";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };
  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.${system}.default = with pkgs;
      mkShell {
        buildInputs = [nodejs_22 act yarn];
      };
  };
}
