# script will get the list of all the contributors for GNOME server and make a json file
# and commits it

import requests
import json
import os

# Replace with your GitHub token
ORG_NAME = "GNOME-Nepal"
BASE_URL = "https://api.github.com"

headers = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Authorization": f"Bearer {os.getenv('MAINTAINERS_POLLING_TOKEN')}",
}

# Get repositories of the organization
repos_url = f"{BASE_URL}/orgs/{ORG_NAME}/repos"
repos_response = requests.get(repos_url, headers=headers)

contributor_contribution_dict = {}


if repos_response.status_code == 200:
    repos = repos_response.json()

    for repo in repos:
        repo_name = repo["name"]

        # Get contributors for the current repository
        contributors_url = f"{BASE_URL}/repos/{ORG_NAME}/{repo_name}/contributors"
        contributors_response = requests.get(contributors_url, headers=headers)

        if contributors_response.status_code == 200:
            repo_contributors = contributors_response.json()

            if repo_contributors:
                for repo_contributor in repo_contributors:
                    username = repo_contributor["login"]
                    if repo_contributor["type"] != "User":
                        continue
                    if username not in contributor_contribution_dict:
                        contributor_contribution_dict[username] = 0

                    contributor_contribution_dict[username] += repo_contributor[
                        "contributions"
                    ]


# now we will get all the user's information
full_information = []

for username in contributor_contribution_dict.keys():
    user_information_url = f"{BASE_URL}/users/{username}"

    response = requests.get(
        user_information_url,
        headers=headers,
    )
    score = contributor_contribution_dict[username]
    if response.status_code == 200:
        user = response.json()
        user["contributions"] = score
        full_information.append(user)

# sort by highest contributors first
full_information = sorted(
    full_information,
    key=lambda x: x["contributions"],
    reverse=True,
)

with open("contributors.json", "w") as c:
    json.dump(
        full_information,
        c,
        indent=2,
        ensure_ascii=False,
    )
