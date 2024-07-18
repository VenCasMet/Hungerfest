#include <bits/stdc++.h>
// #include<iostream>
// #include <string>
// #include <vector>

using namespace std;
// void run()
// {
// #ifndef ONLINE_JUDGE
//     freopen("input.txt", "r", stdin);
//     freopen("aw.txt", "w", stdout);
// #endif
// }
// c=n%2?2*n:4;
// it means if n%2=0 set c=2*n else c=4
#define ll long long

void solve()
{
    long long n;
    cin >> n;
    vector<long long> ans{n};
    for (long long i = 1; i < n; i *= 2)
    {
        if (n & i)
        {
            ans.push_back(n ^ i);
        }
    }
    cout << ans.size() << '\n';
    for (int i = ans.size() - 1; i >= 0; i--)
    {
        cout << ans[i] << " ";
    }
    cout << endl;
}

signed main()
{
    // run();
    long long t = 1;
    cin >> t;
    while (t--)
    {
        solve();
    }
}